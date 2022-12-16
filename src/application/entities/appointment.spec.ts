import { Appointment } from './appointment'

describe('Appointment', () => {
  it('should be able create appoint', () => {
    const appointment = new Appointment({
      description: 'Hello',
      consumerId: '12233',
      endsAt: new Date(new Date().setHours(new Date().getHours() + 2)),
      startsAt: new Date(new Date().setHours(new Date().getHours() + 1))
    })

    console.log(appointment)
  })
})
