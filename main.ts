radio.setGroup(80)
let sernumb = control.deviceSerialNumber()
let cislo = -1
let allowed = true
radio.onReceivedValue(function on_received_value(povoleni: string, povoleno: number) {
    
    if (povoleno == 1) {
        allowed = true
    }
    
    if (povoleno == 0) {
        allowed = false
    }
    
})
if (allowed) {
    basic.showIcon(IconNames.Yes)
}

if (!allowed) {
    basic.showIcon(IconNames.No)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (allowed) {
        basic.clearScreen()
        cislo += 1
        basic.showString(String.fromCharCode(cislo + 65))
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (allowed) {
        basic.clearScreen()
        cislo -= 1
        basic.showString(String.fromCharCode(cislo + 65))
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    if (allowed) {
        radio.sendValue("hlas", cislo)
        radio.sendValue("serialnumber", sernumb)
    }
    
})
radio.onReceivedValue(function on_received_value2(confirm: string, serial_confirm: number) {
    if (serial_confirm == sernumb) {
        basic.showIcon(IconNames.Happy)
    }
    
})
