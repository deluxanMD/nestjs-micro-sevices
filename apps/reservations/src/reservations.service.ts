import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepositry } from './reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationsRepository: ReservationsRepositry) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: '1234',
    });
  }

  findAll() {
    return this.reservationsRepository.find({});
  }

  findOne(_id: number) {
    return this.reservationsRepository.findOne({ _id });
  }

  update(_id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  remove(_id: number) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
