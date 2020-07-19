import { uuid } from 'uuidv4';

class Patient {
  id: string;

  name: string;

  birthDate: Date;

  cpf: string;

  constructor({ name, birthDate, cpf }: Omit<Patient, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.birthDate = birthDate;
    this.cpf = cpf;
  }
}

export default Patient;
