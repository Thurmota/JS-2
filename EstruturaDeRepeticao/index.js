let velocity = 80

while (velocity > 0) {
    alert("O carro esta a " + velocity + " km/h")
    velocity -= 20
    alert("Diminuindo 20km/h")

    if (velocity === 40) {
        break
    }
}

alert("O carro parou!")