
class BaseController {

  find(req, res) {
    const { params } = req;

    res.json({ params });
  }

  findById(req, res) {

    res.json({});

  }

  create(req, res) {

    res.json({});

  }

  delete(req, res) {

    res.json({});

  }

  update(req, res) {

    res.json({});

  }
}
module.exports = BaseController;