"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    const PORT = 8000;
    app.use(express_1.default.json());
    const graphqlserver = new server_1.ApolloServer({
        typeDefs: `
    type Query {
        hello:String
    }
    `,
        resolvers: {
            Query: {
                hello: () => 'this is a graphql'
            }
        },
    });
    yield graphqlserver.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlserver));
    app.get('/', (req, res) => {
        return res.send('server is running');
    });
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    });
}))();
