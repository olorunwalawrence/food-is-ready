import chai from 'chai';
import chaiHttp from 'chai-http';
// import app from '../../app';
import data from './testData/testData';


const { should } = chai;
should();

chai.use(chaiHttp);

describe('Test users APIs', () => {
  before('Create new user to seed database', (done) => {
    chai.request(app).post('/create')
      .send({
        firstname: 'olorunwa',
        lastname: 'lawrence',
        username: 'olorunwalawrence',
        email: 'wemail@wemail.com',
        password: 'password'
      })
      .end((error) => {
        if (error) {
          console.log('An error occured while creating seeduser data');
        } else {
          console.log('User created successfully');
        }
        done();
      });
  });
});


describe('/POSt route create user', () => {
  it('should create a new user and return 201 status code', (done) => {
    chai.request(app)
      .post('/create')
      .send(data.rightData)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('message');
        res.body.message.should.be.an('object');
        res.body.should.have.property('token');
        res.body.token.should.be('string');
        done();
      });
  });
  it('should not create a new user and return 422 status code', (done) => {
    chai.request(app)
      .post('/create')
      .send(data.wrongData)
      .end((err, res) => {
        res.should.have.status(422);
        res.body.should.have.property('errors');
        res.body.errors.should.be.a('string');
        done();
      });
  });
});
