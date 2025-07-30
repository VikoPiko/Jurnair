import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListingsService } from './listings.service';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  async getListings() {
    const listings = await this.listingsService.getAll();
    return listings;
  }

  @Post('toggle-like')
  async toggleLike(@Body('listingId') listingId: string) {
    if (!listingId) throw new Error('ListingId is required');
    console.log('Recieved ID:', listingId);

    const updatedListing = await this.listingsService.toggleLike(listingId);
    return updatedListing;
  }
}
