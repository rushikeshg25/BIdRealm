"use client";
import { User } from "lucia";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import date from "date-and-time";
import { useRouter } from "next/navigation";
import { mkConfig, generateCsv, download } from "export-to-csv";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AuctionWithBidsT } from "@repo/db/types";

const MyAuctions = ({
  user,
  Auctions,
}: {
  user: User;
  Auctions: AuctionWithBidsT[];
}) => {
  const router = useRouter();
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const csvDownload = () => {
    const csv = generateCsv(csvConfig)(Auctions);
    download(csvConfig)(csv);
  };
  if (!Auctions || Auctions.length === 0) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        No auctions.{" "}
        <Link href='/new' className='underline underline-offset-2'>
          Create one
        </Link>
      </div>
    );
  }
  return (
    <div className='container mx-auto py-8 px-4 sm:px-6 lg:px-8 '>
      <div className='flex min-h-screen w-full flex-col '>
        <div className='flex flex-col sm:gap-4 sm:py-4 '>
          <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <h1>My Auctions</h1>
            <div className='relative ml-auto flex-1 md:grow-0'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search...'
                className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]'
              />
            </div>
          </header>
          <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
            <Tabs defaultValue='all'>
              <div className='flex items-center'>
                <TabsList>
                  <TabsTrigger value='all'>All</TabsTrigger>
                  <TabsTrigger value='active'>Active</TabsTrigger>
                  <TabsTrigger value='draft'>Ended</TabsTrigger>
                </TabsList>
                <div className='ml-auto flex items-center gap-2'>
                  <Button
                    size='sm'
                    variant='outline'
                    className='h-8 gap-1'
                    onClick={csvDownload}
                  >
                    <FileIcon className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                      Export
                    </span>
                  </Button>
                  <Button
                    size='sm'
                    className='h-8 gap-1'
                    onClick={() => router.push("/new")}
                  >
                    <CirclePlusIcon className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                      Add Auction
                    </span>
                  </Button>
                </div>
              </div>
              <TabsContent value='all'>
                <Card x-chunk='dashboard-06-chunk-0'>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className='hidden w-[100px] sm:table-cell'>
                            <span className='sr-only'>Image</span>
                          </TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className='hidden md:table-cell'>
                            Price
                          </TableHead>
                          <TableHead className='hidden md:table-cell'>
                            Total Sales
                          </TableHead>
                          <TableHead className='hidden md:table-cell'>
                            Created at
                          </TableHead>
                          <TableHead>
                            <span className='sr-only'>Actions</span>
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Auctions.map((auction) => (
                          <TableRow key={auction.id}>
                            <TableCell className='hidden sm:table-cell'>
                              <img
                                alt='Product image'
                                className='aspect-square rounded-md object-cover'
                                height='64'
                                src='/placeholder.svg'
                                width='64'
                              />
                            </TableCell>
                            <TableCell className='font-medium'>
                              {auction.title}
                            </TableCell>
                            <TableCell>
                              <Badge variant='outline'>Draft</Badge>
                            </TableCell>
                            <TableCell className='hidden md:table-cell'>
                              {auction.currentPrice === 0
                                ? auction.startingPrice
                                : auction.currentPrice}
                            </TableCell>
                            <TableCell className='hidden md:table-cell'>
                              {auction.bids.length}
                            </TableCell>
                            <TableCell className='hidden md:table-cell'>
                              {date.format(
                                auction.createdAt,
                                "YYYY/MM/DD HH:mm:ss"
                              )}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell className='hidden sm:table-cell'>
                            <img
                              alt='Product image'
                              className='aspect-square rounded-md object-cover'
                              height='64'
                              src='/placeholder.svg'
                              width='64'
                            />
                          </TableCell>
                          <TableCell className='font-medium'>
                            Laser Lemonade Machine
                          </TableCell>
                          <TableCell>
                            <Badge variant='outline'>Draft</Badge>
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            $499.99
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            25
                          </TableCell>
                          <TableCell className='hidden md:table-cell'>
                            2023-07-12 10:42 AM
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup='true'
                                  size='icon'
                                  variant='ghost'
                                >
                                  <MoveHorizontalIcon className='h-4 w-4' />
                                  <span className='sr-only'>Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align='end'>
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
};

function CirclePlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M8 12h8' />
      <path d='M12 8v8' />
    </svg>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
      <path d='M14 2v4a2 2 0 0 0 2 2h4' />
    </svg>
  );
}

function MoveHorizontalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='18 8 22 12 18 16' />
      <polyline points='6 8 2 12 6 16' />
      <line x1='2' x2='22' y1='12' y2='12' />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

export default MyAuctions;
