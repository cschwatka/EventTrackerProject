import { end } from "@popperjs/core";

export class Run {

  id: number;
  name: string;
  date: string;
  distance: number;
  startTime: string;
  endTime: string;
  heartRate: number | null;
  caloriesBurned: number;
  comments: string;
  mediaUrl: string;

  constructor(
    id: number=0,
    name: string='',
    date: string='',
    distance: number=0,
    startTime: string='',
    endTime: string='',
    heartRate: number=0,
    caloriesBurned: number=0,
    comments: string='',
    mediaUrl: string=''
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.distance = distance;
    this.startTime = startTime;
    this.endTime = endTime;
    this.heartRate = heartRate;
    this.caloriesBurned = caloriesBurned;
    this.comments = comments;
    this.mediaUrl = mediaUrl;
  }
}
