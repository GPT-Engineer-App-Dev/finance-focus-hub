import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data (replace with real API calls later)
const mockStockData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.5 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2750.80, change: -0.3 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 305.15, change: 1.2 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3380.50, change: -1.5 },
];

const mockChartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 5200 },
];

const StockData = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock query (replace with real API call later)
  const { data: stockData, isLoading, error } = useQuery({
    queryKey: ['stockData'],
    queryFn: () => Promise.resolve(mockStockData),
  });

  const filteredStocks = stockData?.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Market Data</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Indices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <IndexCard name="S&P 500" value="4,185.47" change="+0.75%" />
            <IndexCard name="Dow Jones" value="33,875.40" change="-0.32%" />
            <IndexCard name="NASDAQ" value="12,153.41" change="+1.28%" />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Stock Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Search stocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock.symbol}>
                  <TableCell className="font-medium">{stock.symbol}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>${stock.price.toFixed(2)}</TableCell>
                  <TableCell className={stock.change >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {stock.change > 0 ? '+' : ''}{stock.change}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Market Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="1M" className="w-full">
            <TabsList>
              <TabsTrigger value="1D">1D</TabsTrigger>
              <TabsTrigger value="1W">1W</TabsTrigger>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="3M">3M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
            </TabsList>
            <TabsContent value="1M">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            {/* Add similar TabsContent for other time periods */}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

const IndexCard = ({ name, value, change }) => {
  const isPositive = change.startsWith('+');
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </p>
      </CardContent>
    </Card>
  );
};

export default StockData;