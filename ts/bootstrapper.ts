/// <reference path="vendingMachine.ts" />

var machine = new VendingMachine();
machine.Size = VendingMachineSize.medium;
ko.applyBindings(machine);