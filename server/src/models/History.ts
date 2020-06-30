import { HistoryElement } from './HistoryElement';

class History {
  private readonly history: HistoryElement[] = [];

  addHistoryElement(historyElement: HistoryElement) {
    this.history.push(historyElement);
  }
  getRoomHistory(roomId: number) {
    const roomHistory = this.history.find(historyElement => historyElement.roomid === roomId);
    if (typeof roomHistory === 'undefined') return 'No History';
    return roomHistory;
  }
}

const history = new History();
export { history };
