export class Wine {
  id: number;
  appellation: String;
  nomChateau: String;
  type: String;
  millesime: number;
  nbBouteillesAchetees: number;
  destockage: number;
  nbBouteillesStock: number;
  onEdit: boolean;

  isOnEdit(): boolean {
    return this.onEdit;
  }
}