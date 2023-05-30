const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('./index'); //index.js

//当提供有效的用户名和密码时，测试确保应用程序能够返回相应用户的数据，如用户名和电子邮件地址。
describe('Node.js App', () => {
  describe('GET /login', () => {
    it('should return user data when given valid credentials', (done) => {
      chai
        .request(app)
        .get('/login')
        .query({ username: 'testuser', password: 'testpassword' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('username', 'testuser');
          expect(res.body).to.have.property('email', 'testuser@example.com');
          done();
        });
    });

    it('should return an error when given invalid credentials', (done) => {
      chai
        .request(app)
        .get('/login')
        .query({ username: 'invaliduser', password: 'invalidpassword' })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.have.property('error', 'Invalid credentials');
          done();
        });
    });
  });

  //当提供新的用户名、密码和电子邮件地址时，测试确保应用程序能够创建新用户并返回相应用户的数据，如用户名和电子邮件地址。
  describe('GET /register', () => {
    it('should create a new user and return user data', (done) => {
      chai
        .request(app)
        .get('/register')
        .query({ username: 'newuser', password: 'newpassword', email: 'newuser@example.com' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property('username', 'newuser');
          expect(res.body).to.have.property('email', 'newuser@example.com');
          // 其他断言和验证逻辑
          done();
        });
    });
  });

  //当提供电影名称、座位和价格时，测试确保应用程序能够成功添加电影票，并返回相应的成功消息。
  describe('Node.js App', () => {
    describe('GET /piao', () => {
      it('should add a movie ticket and return success message', (done) => {
        chai
          .request(app)
          .get('/piao')
          .query({ movie: 'Avengers: Endgame', seat: 'A1', price: 10 })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Movie ticket added successfully');
            // 其他断言和验证逻辑
            done();
          });
      });
    });
    
    //测试确保应用程序能够返回电影票的列表，用于查询已添加的电影票。
    describe('GET /indent', () => {
      it('should return a list of movie tickets', (done) => {
        chai
          .request(app)
          .get('/indent')
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            // 其他断言和验证逻辑
            done();
          });
      });
    });
    
    //当提供要删除的电影票的ID时，测试确保应用程序能够成功删除电影票，并返回相应的成功消息。
    describe('GET /delete', () => {
      it('should delete a movie ticket and return success message', (done) => {
        const ticketId = 123; // 假设要删除的电影票的ID为123
        chai
          .request(app)
          .get('/delete')
          .query({ id: ticketId })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Movie ticket deleted successfully');
            // 其他断言和验证逻辑
            done();
          });
      });
    });
  
    //当提供视频的ID时，测试确保应用程序能够返回对应的视频文件，并验证响应的内容类型是否为 'video/mp4'。
    describe('Node.js App', () => {
        describe('GET /movie', () => {
          it('should return a video file', (done) => {
            const videoId = 123; // 假设要访问的视频ID为123
            chai
              .request(app)
              .get('/movie')
              .query({ id: videoId })
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.equal('video/mp4');
                // 其他断言和验证逻辑
                done();
              });
          });
        });
      
        //提供图片的ID时，测试确保应用程序能够返回对应的图片文件，并验证响应的内容类型是否为 'image/png'。s
        describe('GET /image', () => {
          it('should return an image file', (done) => {
            const imageId = 456; // 假设要访问的图片ID为456
            chai
              .request(app)
              .get('/image')
              .query({ id: imageId })
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.headers['content-type']).to.equal('image/png');
                // 其他断言和验证逻辑
                done();
              });
          });
        });
      
      });
      
  });
  


});
