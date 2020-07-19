import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import DoctorsRepository from '../repositories/DoctorsRepository';
import CreateDoctorService from '../services/CreateDoctorServices';

const doctorsRouter = Router();
// const doctorsRepository = new DoctorsRepository();

doctorsRouter.get('/', async (req, res) => {
  const doctorsRepository = getCustomRepository(DoctorsRepository);
  const doctors = await doctorsRepository.find();

  return res.json(doctors);
});

doctorsRouter.post('/', async (req, res) => {
  try {
    const { name, crm, crmuf } = req.body;

    const createDoctor = new CreateDoctorService();

    const doctor = await createDoctor.execute({ name, crm, crmuf });

    return res.json(doctor);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default doctorsRouter;
