export class Task {
        constructor(
                public id: number,
                public title: string,
                public rank: number,
                public description: string,
                public status: string,
                public createdAt,
                public updatedAt
        ) {}
}
