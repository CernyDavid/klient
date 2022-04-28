radio.set_group(80)
serialnumber = control.device_serial_number()
cislo = 64
def on_button_pressed_b():
    global cislo
    cislo += 1
    basic.show_string(String.from_char_code(cislo))
input.on_button_pressed(Button.B, on_button_pressed_b)
def on_button_pressed_a():
    global cislo
    cislo -= 1
    basic.show_string(String.from_char_code(cislo))
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_ab():
    radio.send_value("hlas", cislo)
    radio.send_value("serialnumber", serialnumber)
input.on_button_pressed(Button.AB, on_button_pressed_ab)