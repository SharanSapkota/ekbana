import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
            order: Model,
            product: Model
        },

        seeds(server) {
            server.create("user", {
                id: 1,
                name: "sharan",
                image: "https://images.squarespace-cdn.com/content/v1/5c82f54e7980b375f3b91cb0/1553904496023-JZ9JVMIZ3SNATLKXL190/ke17ZwdGBToddI8pDm48kDACKg16QbLoicCdsPgFzpd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaTo7R26YudazsZkiHIvjoiB41FYjsaf5gQ_5G47s7cv1RIjSGCD6L0ZeeFd3jvQA/Toon+Link+%288%29.png",
                password: "sharan", phone_number: 98234, email: "sapkota@gmail.com", orders: { "tv": 100 }
            })
            server.create("user", {
                id: 2, name: "sharan0", image: "https://images.squarespace-cdn.com/content/v1/5c82f54e7980b375f3b91cb0/1553904496023-JZ9JVMIZ3SNATLKXL190/ke17ZwdGBToddI8pDm48kDACKg16QbLoicCdsPgFzpd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaTo7R26YudazsZkiHIvjoiB41FYjsaf5gQ_5G47s7cv1RIjSGCD6L0ZeeFd3jvQA/Toon+Link+%288%29.png",
 password: "sharan", phone_number: 98234, email: "sapkota@gmail.com" ,  orders: { "tv": 100}  })
            server.create("user", {
                id: 3, name: "sharan1", image: "https://images.squarespace-cdn.com/content/v1/5c82f54e7980b375f3b91cb0/1553904496023-JZ9JVMIZ3SNATLKXL190/ke17ZwdGBToddI8pDm48kDACKg16QbLoicCdsPgFzpd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaTo7R26YudazsZkiHIvjoiB41FYjsaf5gQ_5G47s7cv1RIjSGCD6L0ZeeFd3jvQA/Toon+Link+%288%29.png",
password: "sharan", phone_number: 98234, email: "sapkota@gmail.com", orders: { "tv": 100 }   })
            server.create("user", {
                id: 4, name: "sharan2", image: "https://images.squarespace-cdn.com/content/v1/5c82f54e7980b375f3b91cb0/1553904496023-JZ9JVMIZ3SNATLKXL190/ke17ZwdGBToddI8pDm48kDACKg16QbLoicCdsPgFzpd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaTo7R26YudazsZkiHIvjoiB41FYjsaf5gQ_5G47s7cv1RIjSGCD6L0ZeeFd3jvQA/Toon+Link+%288%29.png",
 password: "sharan", phone_number: 98234, email: "sapkota@gmail.com", orders: { "tv": 100 }  })
            server.create("order", { id: 14, name: "radio", isActive: true })
            server.create("order", { id: 24, name: "scissors", isActive: true })
        },

        routes() {
            this.namespace = "api"

            this.get("/users", schema => {
                return schema.users.all()
            })
            this.get("/users/search", schema => {
                return schema.users.all()
            })
            this.post("/users", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
                
                return schema.movies.create(attrs)
            })
            this.post("/login/users/:name", async (schema, request) => {
                let attrs = JSON.parse(request.requestBody)
              
                let name = request.params.name
               
                let a = schema.users.where({name: name})
               console.log(a)
                if (a) {
                    console.log(a.models)
                    return a.models
                } else {
                    return ({"message": "no user"})
                }
               
            })
            this.patch("/users/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let movie = schema.movies.find(id)

                return movie.update(newAttrs)
            })

            this.delete("/users/:id", (schema, request) => {
                let id = request.params.id

                return schema.movies.find(id).destroy()
            })
            this.get("/orders", schema => {
                return schema.orders.all()
            })
            this.get("/orders/search", schema => {
                return schema.orders.all()
            })
            this.post("/orders", (schema, request) => {
                let attrs = JSON.parse(request.requestBody)

                return schema.movies.create(attrs)
            })
            this.patch("/orders/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id
                let movie = schema.movies.find(id)

                return movie.update(newAttrs)
            })

            this.delete("/orders/:id", (schema, request) => {
                let id = request.params.id

                return schema.movies.find(id).destroy()
            })
        },
    })

    return server
}
