import express from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

(async()=>{
    const app=express()
const PORT=8000

app.use(express.json())

const graphqlserver = new ApolloServer({
    typeDefs:`
    type Query {
        hello:String
    }
    `,
    resolvers:{
        Query:{
            hello:()=>'this is a graphql'
        }
    },
  });


  await graphqlserver.start();
  app.use('/graphql',expressMiddleware(graphqlserver))
app.get('/',(req,res)=>{
    return res.send('server is running')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
})();