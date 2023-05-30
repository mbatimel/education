import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: 'сын маминой подруги',
    description: 'имя пользователя',
  })
  @Column()
  username: string;
  @ApiProperty({ example: 'mango22814', description: 'пароль' })
  @Column()
  password: string;
}
