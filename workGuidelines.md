Team Name: retrv
Team Members: Darren Moore, Pedrum Kholghi, Danyaal Ghafoor

Hours: 9-12 2-5

Practices: pair programming, tdd (to be revised continuously)

Bank holiday: Fri 2nd & Mon 5th Half-day mornings, potential research day and catch up with other group

Generale rule: majority of work to be done together, only individual work if situation requires it or later in to
project to add new features once all feel comfortable with working style.

Ceremonies: 9am Morning stand-up & 5pm close off - What went well? What didn't work well? Is there any bottlenecks?

Technologies: Nodejs, MongoDB, Express, Mongoose, Passport, dotenv

Software architecture: file: - routes.js file - RESTful api route response and requests:

            app.get(cards/)
            app.get(cards/:id)
            app.post(cards/)
            app.put(cards/:id)
            app.delete(cards/:id)

            app.get(users/)
            app.get(users/:id)
            app.post(users/)
            app.put(users/:id)
            app.delete(users/:id)




    - server.js - creates the server (import the config class)
                                        import Server:
                                            create new instance of server

    - main controller file: - class for each collection containing methods to work on that
                              collections route
    classes:
            Server:
                constructor(config...){
                    this.config = config
                }

                createServer(config){
                    port & URI
                }
            Users: {
                getUsers
                getUsersInstance
                postUsersInstance
                updateUsersInstance
                deleteUsersInstance
            }

            Cards: {
                getcards
                getcardsInstance
                postcardsInstance
                updatecardsInstance
                deletecardsInstance
            }


        revisitTimeInterval - abstract class:
                    constructor(period) {
                        period = this.period
                    }
                                {
                                    period:
                                    addPeriod()
                                }
                period0 extends period:
                    super constructor(period)
                        period0 = this.period
                                {
                                    period0:
                                    addPeriod0:
                                }
                period1 extends period:
                    super constructor(period)
                        period1 = this.period
                                {
                                    period1:
                                    addPeriod1:
                                }
                period2 extends period:
                    super constructor(period)
                        period2 = this.period
                                {
                                    period2:
                                    addPeriod2:
                                }
                period3 extends period:
                    super constructor(period)
                        period3 = this.period
                                {
                                    period3:
                                    addPeriod3:
                                }

    - config file: - object that contains configurations settings as member variables:
            e.g.
                config.js
                const config = {
                                app: {
                                        port: 3000
                                        },
                                db: {
                                        URI: to mongodb atlas cluster
                                        host: 'localhost',
                                        port: 27017,
                                        name: 'db'
                                    }
                                };

    - .env file: - Dotenv is a great Node library that enables the use of a .env file that can
                hold environment variables and feed them to your Node app. Keep secret key in
                .env and add .env to .gitignore

database: mongoDB

Routes:
/cards
/login
/users

    Collections:
    users :
            {
                user_id
                username
                password
                role
                periods
                userLoginTime -utc format, one long number
                cards
            }

    cards:
            {
                card_id
                user_id
                numTimesSuccessfullyAnswered: 0, 1, 2, 3
                toBeAnsweredTime -utc format, one long number
                currentAnsweringTime
            }



StartingTasks: - generate user stories - discuss how to achieve user stories and break down in to tasks - create project backlog of tasks - task review - decide smallest feature to implement

MiniDeadLine1: Friday 12pm: - config.js, .env, main controller file (one class of REST methods for routes), routes
for each collection

Deadline: Thursday 8th April 12pm - 2pm
