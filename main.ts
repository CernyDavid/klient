radio.setGroup(80)
let sernumb = control.deviceSerialNumber()
let cislo = -1
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    cislo += 1
    basic.showString(String.fromCharCode(cislo + 65))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    cislo -= 1
    basic.showString(String.fromCharCode(cislo + 65))
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendValue("hlas", cislo)
    radio.sendValue("serialnumber", sernumb)
})
