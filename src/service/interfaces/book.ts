import { Document } from "mongoose";

export interface Book extends Document{
  title: string;
  description?: string;
  authors: string;
  favorite?: boolean;
  fileCover?: string;
  fileName?: string;
}
