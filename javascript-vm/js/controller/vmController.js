/*
VendingMachine의 Controller 역할
1. VendingMachine 초기화
2. 동작별로 data변경과 rendering의 역할을 여기에서 명시적으로 나타냄
*/

export default class VendingMachine {
  constructor(machineModel, walletModel, machineView, walletView) {
    console.log(machineModel);
    console.log(walletView);
    this.machineModel = machineModel;
    this.walletModel = walletModel;
    this.machineView = machineView;
    this.walletView = walletView;
  }

  initializeConnection() {
    this.walletView.clickMoneyButtonHandler = this.clickMoneyButtonHandler.bind(this);
    this.walletModel.notifyChangedMoney = this.notifyChangedMoney.bind(this);
    this.machineView.clickItemNumberButton = this.clickItemNumberButton.bind(this);
    this.machineModel.notifyReceiveMoney = this.notifyReceiveMoney.bind(this);
  }

  clickMoneyButtonHandler(moneyUnit) {
    this.clearChangeTimeCounting();
    if (!this.walletModel.hasMoney(moneyUnit)) {
      this.walletView.alertNoMoneyUnit(moneyUnit);
      return;
    }
    this.walletView.printClickedMoney(moneyUnit);
    this.walletModel.decreaseMoney(moneyUnit);
    this.machineModel.receiveMoney(moneyUnit);
    const totalInsertedMoney = this.machineModel.getTotalInsertedMoney();
    this.machineView.renderAvailableItem(totalInsertedMoney);
  }

  clickItemNumberButton(target) {
    this.setTimeoutItemNumber = this.setTimeoutItemNumber || { current: null, number: '' };
    this.monitorItemNumber(target); // 완료되면 confirmItemNumber 함수 실행
  }

  monitorItemNumber(target) {
    this.clearChangeTimeCounting();
    let checker = this.setTimeoutItemNumber;
    if (!!checker.current) clearTimeout(checker.current);
    checker.number += target.dataset['select'];
    // this.machineModel.setCurrentNumber(checker.number);
    // console.log(checker.number);
    // this.machineView.renderCurrentNumber(this.machineModel.getCurrentNumber());
    this.changeCurrentNumber(checker.number);
    checker.current = setTimeout(() => {
      if (checker.number > this.machineModel.getItemList().length) {
        this.machineView.alertNotAvailableNumber();
        this.changeCurrentNumber('아이템 번호를 입력하세요😎');
      } else {
        this.selectItemHandler(checker.number);
      }
      this.initItemNumberCounting();
    }, 3000);
  }

  changeCurrentNumber(currentNumber) {
    this.machineModel.setCurrentNumber(currentNumber);
    console.log(this.machineModel.getCurrentNumber(), 222);
    this.machineView.renderCurrentNumber(this.machineModel.getCurrentNumber());
  }

  selectItemHandler(itemNumber) {
    if (!this.machineModel.isEnoughMoney(itemNumber)) {
      this.machineView.alertShortOfMoney();
      this.changeCurrentNumber('아이템 번호를 입력하세요😎');
      return;
    }

    this.machineModel.provideItemHandler(itemNumber);
    const itemList = this.machineModel.getItemList();
    const totalInsertedMoney = this.machineModel.getTotalInsertedMoney();
    this.machineView.renderFromItemSelected(itemList, itemNumber, totalInsertedMoney);
    this.startReturnTimeCounting();
    this.changeCurrentNumber('아이템 번호를 입력하세요😎');
  }

  startReturnTimeCounting() {
    this.setTimeoutChange = this.setTimeoutChange || null;
    if (this.setTimeoutChange) clearTimeout(this.setTimeoutChange);
    this.setTimeoutChange = setTimeout(() => {
      this.returnChangeHandler();
    }, 3000);
  }

  returnChangeHandler() {
    const change = this.machineModel.returnChange();
    const totalInsertedMoney = this.machineModel.getTotalInsertedMoney();
    this.machineView.renderFromChangeReturned(change, totalInsertedMoney);
    this.walletModel.receiveChange(change);
  }

  notifyChangedMoney(moneyUnit) {
    const moneyList = this.walletModel.getMoneyList();
    const fullAmount = this.walletModel.getFullAmount();
    this.walletView.updateRendering(moneyUnit, moneyList, fullAmount);
  }

  notifyReceiveMoney(insertedMoney) {
    const totalInsertedMoney = this.machineModel.getTotalInsertedMoney();
    this.machineView.renderFromMoneyInserted(insertedMoney, totalInsertedMoney);
  }

  initItemNumberCounting() {
    this.setTimeoutItemNumber = { current: null, number: '' };
    
  }

  clearChangeTimeCounting() {
    clearTimeout(this.setTimeoutChange);
  }
}