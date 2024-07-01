import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Link from "next/link";

const Filters = () => {
  return (
    <div className='bg-muted rounded-lg p-6 space-y-6 dark:bg-card dark:text-card-foreground'>
      <div>
        <h3 className='text-lg font-medium mb-2'>Categories</h3>
        <div className='space-y-2'>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Art
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Collectibles
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Electronics
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Fashion
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Home & Garden
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Jewelry
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Sports
          </Link>
          <Link
            href='#'
            className='block text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground'
            prefetch={false}
          >
            Toys
          </Link>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-medium mb-2'>Filters</h3>
        <div className='space-y-2'>
          <div>
            <h4 className='text-sm font-medium mb-1'>Price</h4>
            <div className='flex items-center gap-2'>
              <Input
                type='number'
                placeholder='Min'
                className='w-full rounded-md bg-background border-input px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-card dark:border-card dark:text-card-foreground'
              />
              <span className='text-muted-foreground dark:text-muted-foreground'>
                -
              </span>
              <Input
                type='number'
                placeholder='Max'
                className='w-full rounded-md bg-background border-input px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-card dark:border-card dark:text-card-foreground'
              />
            </div>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-1'>Condition</h4>
            <div className='space-y-1'>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                New
              </Label>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                Used
              </Label>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                Antique
              </Label>
            </div>
          </div>
          <div>
            <h4 className='text-sm font-medium mb-1'>Time Left</h4>
            <div className='space-y-1'>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                Less than 1 hour
              </Label>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                Less than 6 hours
              </Label>
              <Label className='flex items-center gap-2 font-normal dark:text-card-foreground'>
                <Checkbox />
                Less than 1 day
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-medium mb-2'>Live Auctions</h3>
        <div className='bg-background rounded-lg p-4 space-y-4 dark:bg-card dark:text-card-foreground'>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-sm font-medium'>Antique Vase</h4>
              <p className='text-muted-foreground text-xs dark:text-muted-foreground'>
                Ends in:
              </p>
            </div>
            <div className='bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium dark:bg-primary dark:text-primary-foreground'>
              12:34:56
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-sm font-medium'>Vintage Camera</h4>
              <p className='text-muted-foreground text-xs dark:text-muted-foreground'>
                Ends in:
              </p>
            </div>
            <div className='bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium dark:bg-primary dark:text-primary-foreground'>
              08:15:23
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h4 className='text-sm font-medium'>Classic Car</h4>
              <p className='text-muted-foreground text-xs dark:text-muted-foreground'>
                Ends in:
              </p>
            </div>
            <div className='bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium dark:bg-primary dark:text-primary-foreground'>
              01:45:09
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
