import Fastify from 'fastify'
import FastifyStatic from '@fastify/static'
import path from 'node:path'

const fastify = Fastify({
  logger: true,
})

fastify.register(FastifyStatic, {
  root: path.join(__dirname, 'public'),
})

fastify.listen({ port: 8000 }, function (err, _) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
