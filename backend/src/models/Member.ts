import mongoose, { Schema, Document } from 'mongoose';

export interface IMember extends Document {
  name: string;
  email: string;
  membershipNumber: string;
  joinDate: Date;
  status: 'active' | 'inactive';
}

const MemberSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  membershipNumber: { type: String, required: true, unique: true },
  joinDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' }
});

export default mongoose.model<IMember>('Member', MemberSchema); 