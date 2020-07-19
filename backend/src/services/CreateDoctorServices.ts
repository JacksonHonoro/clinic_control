import { getCustomRepository } from 'typeorm';
import Doctor from '../models/Doctor';
import DoctorsRepository from '../repositories/DoctorsRepository';

interface Request {
  name: string;
  crm: string;
  crmuf: string;
}

class CreateDoctorService {
  public async execute({ name, crm, crmuf }: Request): Promise<Doctor> {
    const doctorsRepository = getCustomRepository(DoctorsRepository);

    const crmFound = await doctorsRepository.findCrm(crm, crmuf);

    if (crmFound) {
      throw Error('This CRM is already registered!');
    }

    const doctor = doctorsRepository.create({ name, crm, crmuf });

    await doctorsRepository.save(doctor);

    return doctor;
  }
}

export default CreateDoctorService;
