import * as dotenv from 'dotenv'

const envFile = (): string => {
  const env = process.env.NODE_ENV || 'dev'

  return `.${env}.env`
}

dotenv.config({ path: envFile() })

export default {
  enviroment: process.env.NODE_ENV,
  port: process.env.PORT,
  base_url: process.env.BASE_URL,
  auth: {
    jwt_secret: process.env.JWT_SECRET,
    expires_in: Number(process.env.JWT_EXPIRATION_TIME),
  },
  databases: {
    postgres: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_POST),
      database: process.env.POSTGRES_DATABASE,
      test_database: process.env.TEST_POSTGRES_DATABASE,
    },
  },
}
