import { v4 as uuidv4 } from 'uuid';

export default function UuidPage() {
  const uuid = uuidv4();
  
  return uuid;
}
