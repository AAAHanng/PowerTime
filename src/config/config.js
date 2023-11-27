let env = process.env.NODE_ENV || 'development'
   console.log(env)
   debugger
   const config = {
      development: {
         baseUrl: 'http://localhost:8080'
   },

   prod: {
      baseUrl: 'http://www.baidu.com'
   }
}
export default config[env]