if(process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 
    'mongodb://mayank:raidon786@ds249355.mlab.com:49355/vidjot-prod'}
} else{
  module.exports = {mongoURI: 
  'mongodb://localhost/vidjot-dev'}
}