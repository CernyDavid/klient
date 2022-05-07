radio.set_group(80)
sernumb = control.device_serial_number()
cislo = -1
allowed = True

def on_received_value(povoleni, povoleno):
    global allowed
    if povoleno == 1:
        allowed = True
    if povoleno == 0:
        allowed = False
radio.on_received_value(on_received_value)

if allowed:
    basic.show_icon(IconNames.YES)
if not allowed:
    basic.show_icon(IconNames.NO)

def on_button_pressed_b():
    global cislo
    if allowed:
        basic.clear_screen()
        cislo += 1
        basic.show_string(String.from_char_code(cislo+65))
input.on_button_pressed(Button.B, on_button_pressed_b)
def on_button_pressed_a():
    global cislo
    if allowed:
            basic.clear_screen()
            cislo -= 1
            basic.show_string(String.from_char_code(cislo+65))
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_ab():
    if allowed:
        radio.send_value("hlas", cislo)
        radio.send_value("serialnumber", sernumb)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_value2(confirm, serial_confirm):
    if serial_confirm == sernumb:
        basic.show_icon(IconNames.HAPPY)
radio.on_received_value(on_received_value2)