const express = require('express');
const Application = require('../models/application');
const router = express.Router();

/*router.post('/:id/apply', async (req, res) => {
  const { applicant_name, email } = req.body;
  const jobId = req.params.id;
  const id = await Application.apply(jobId, applicant_name, email);
  res.status(201).json({ id, message: 'Application submitted' });
});*/

router.get('/', async (req, res) => {
  console.log('GET /api/applications hit');
  const apps = await Application.getAll();
  res.json(apps);
});

router.get('/:id', async (req, res) => {
  const app = await Application.getById(req.params.id);
  if (!app) return res.status(404).json({ message: 'Application not found' });
  res.json(app);
});

router.put('/:id', async (req, res) => {
  try {
    await Application.update(req.params.id, req.body);
    res.json({ message: 'Application updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update application', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Application.delete(req.params.id);
    
    // Reset auto-increment after deletion
    await Application.resetAutoIncrement();
    
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete application', details: err.message });
  }
});


module.exports = router;
