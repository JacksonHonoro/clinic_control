import { EntityRepository, Repository } from 'typeorm';
import Doctor from '../models/Doctor';

@EntityRepository(Doctor)
class DoctorsRepository extends Repository<Doctor> {
  public async findCrm(crm: string, crmuf: string): Promise<Doctor | null> {
    const findDoctor = await this.findOne({
      where: { crm, crmuf },
    });

    return findDoctor || null;
  }
}

export default DoctorsRepository;
