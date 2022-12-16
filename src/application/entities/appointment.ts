import { randomUUID } from 'node:crypto'

type AppointmentProps = {
  description: string
  consumerId: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private _id: string
  private props: AppointmentProps

  constructor(props: AppointmentProps) {
    const now = new Date().getTime()
    const starsDate = new Date(props.startsAt).getTime()
    const endsDate = new Date(props.endsAt).getTime()
    if (starsDate <= now) {
      throw new Error('Invalid date')
    }

    if (endsDate <= starsDate) {
      throw new Error('Invalid date')
    }

    this._id = randomUUID()
  }

  public get id() {
    return this._id
  }

  public get description() {
    return this.props.description
  }

  public set description(value: string) {
    this.props.description = value
  }

  public get consumerId() {
    return this.props.consumerId
  }

  public set consumerId(value: string) {
    this.props.consumerId = value
  }

  public get startsAt() {
    return this.props.startsAt
  }

  public set starsAt(value: Date) {
    const now = new Date().getTime()
    const starsDate = new Date(value).getTime()
    if (starsDate <= now) {
      throw new Error('Invalid date')
    }

    this.props.startsAt = value
  }

  public get starsAt() {
    return this.props.startsAt
  }

  public get endsAt() {
    return this.props.endsAt
  }

  public set endsAt(value: Date) {
    const now = new Date().getTime()
    const starsDate = new Date(this.props.startsAt).getTime()
    const endsDate = new Date(value).getTime()
    if (endsDate <= now) {
      throw new Error('Invalid date')
    }
    if (endsDate <= starsDate) {
      throw new Error('Invalid date')
    }

    this.props.endsAt = value
  }
}
