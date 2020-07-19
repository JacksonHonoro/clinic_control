import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('doctors')
class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  crm: string;

  @Column()
  crmuf: string;
}

export default Doctor;
