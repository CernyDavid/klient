radio.setGroup(80)
let serialnumber = control.deviceSerialNumber()
let cislo = 64
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    cislo += 1
    basic.showString(String.fromCharCode(cislo))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    cislo -= 1
    basic.showString(String.fromCharCode(cislo))
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendValue("hlas", cislo)
    radio.sendValue("serialnumber", serialnumber)
})