import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.listing.findMany();
  }

  async toggleLike(listingId: string) {
    const listing = await this.prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing) {
      throw new Error('Listing not found');
    }

    // Toggle the boolean
    const updatedListing = await this.prisma.listing.update({
      where: { id: listingId },
      data: {
        is_favorite: !listing.is_favorite,
      },
    });

    return updatedListing;
  }
}
