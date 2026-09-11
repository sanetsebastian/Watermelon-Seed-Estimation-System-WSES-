import tkinter as tk
from tkinter import messagebox


# -----------------------------
# Seed Estimation Function
# -----------------------------
def estimate_seeds():
    try:
        weight = float(weight_entry.get())
        length = float(length_entry.get())
        diameter = float(diameter_entry.get())

        if weight <= 0 or length <= 0 or diameter <= 0:
            messagebox.showwarning(
                "Invalid Input",
                "Please enter values greater than zero!"
            )
            return

        # Temporary estimation formula
        estimated_seeds = int(
            (weight * 150) +
            (length * 10) +
            (diameter * 5)
        )

        # Seed level
        if estimated_seeds < 700:
            level = "🌱 LOW SEED"
            message = "A peaceful watermelon."
        elif estimated_seeds < 1000:
            level = "🍉 NORMAL"
            message = "A perfectly ordinary watermelon."
        elif estimated_seeds < 1400:
            level = "👹 SEED MONSTER"
            message = "This watermelon means business!"
        else:
            level = "🚨 SEED CHAOS"
            message = "RUN. THERE ARE TOO MANY SEEDS."

        # Seed density
        density = estimated_seeds / weight

        # Update result
        result_number.config(
            text=f"{estimated_seeds:,}"
        )

        level_label.config(
            text=level
        )

        density_label.config(
            text=f"Seed Density: {density:.1f} seeds/kg"
        )

        message_label.config(
            text=message
        )

        useless_label.config(
            text="Uselessness Score: 99.9% 😂"
        )

    except ValueError:
        messagebox.showerror(
            "Oops!",
            "Please enter numbers only."
        )


# -----------------------------
# Clear Function
# -----------------------------
def clear_all():
    weight_entry.delete(0, tk.END)
    length_entry.delete(0, tk.END)
    diameter_entry.delete(0, tk.END)

    result_number.config(text="---")
    level_label.config(text="Waiting for watermelon...")
    density_label.config(text="Seed Density: ---")
    message_label.config(text="Your watermelon awaits 🍉")
    useless_label.config(text="Uselessness Score: ---")


# -----------------------------
# Main Window
# -----------------------------
window = tk.Tk()

window.title("Watermelon Seed Estimation System")
window.geometry("650x750")
window.resizable(False, False)

# Main background
window.configure(bg="#fff4f7")


# -----------------------------
# Header
# -----------------------------
header = tk.Frame(
    window,
    bg="#16803c",
    height=130
)
header.pack(fill="x")

title = tk.Label(
    header,
    text="🍉 WSES",
    font=("Arial", 32, "bold"),
    bg="#16803c",
    fg="white"
)
title.pack(pady=(20, 0))

subtitle = tk.Label(
    header,
    text="Watermelon Seed Estimation System",
    font=("Arial", 14),
    bg="#16803c",
    fg="#d8ffd9"
)
subtitle.pack()


# -----------------------------
# Introduction
# -----------------------------
intro = tk.Label(
    window,
    text="Because apparently, knowing the number of seeds is important. 😂",
    font=("Arial", 11, "italic"),
    bg="#fff4f7",
    fg="#555555"
)
intro.pack(pady=18)


# -----------------------------
# Input Card
# -----------------------------
input_card = tk.Frame(
    window,
    bg="white",
    padx=30,
    pady=20
)
input_card.pack(padx=40, fill="x")


def create_input(label_text):
    label = tk.Label(
        input_card,
        text=label_text,
        font=("Arial", 11, "bold"),
        bg="white",
        fg="#333333"
    )
    label.pack(anchor="w")

    entry = tk.Entry(
        input_card,
        font=("Arial", 13),
        bg="#f1fff4",
        fg="#222222",
        relief="solid",
        bd=1
    )
    entry.pack(fill="x", pady=(5, 15), ipady=6)

    return entry


weight_entry = create_input("⚖️  Watermelon Weight (kg)")
length_entry = create_input("📏  Watermelon Length (cm)")
diameter_entry = create_input("⭕  Watermelon Diameter (cm)")


# -----------------------------
# Buttons
# -----------------------------
button_frame = tk.Frame(
    window,
    bg="#fff4f7"
)
button_frame.pack(pady=15)

estimate_button = tk.Button(
    button_frame,
    text="🍉  ESTIMATE SEEDS",
    command=estimate_seeds,
    font=("Arial", 13, "bold"),
    bg="#e63946",
    fg="white",
    activebackground="#c9182b",
    activeforeground="white",
    relief="flat",
    padx=25,
    pady=12,
    cursor="hand2"
)
estimate_button.pack(side="left", padx=8)


clear_button = tk.Button(
    button_frame,
    text="CLEAR",
    command=clear_all,
    font=("Arial", 11, "bold"),
    bg="#dddddd",
    fg="#333333",
    relief="flat",
    padx=20,
    pady=12,
    cursor="hand2"
)
clear_button.pack(side="left", padx=8)


# -----------------------------
# Result Card
# -----------------------------
result_card = tk.Frame(
    window,
    bg="#fff0f2",
    padx=20,
    pady=15
)
result_card.pack(padx=40, fill="x")


tk.Label(
    result_card,
    text="ESTIMATED SEEDS",
    font=("Arial", 11, "bold"),
    bg="#fff0f2",
    fg="#555555"
).pack()

result_number = tk.Label(
    result_card,
    text="---",
    font=("Arial", 35, "bold"),
    bg="#fff0f2",
    fg="#e63946"
)
result_number.pack()


level_label = tk.Label(
    result_card,
    text="Waiting for watermelon...",
    font=("Arial", 14, "bold"),
    bg="#fff0f2",
    fg="#16803c"
)
level_label.pack(pady=5)


density_label = tk.Label(
    result_card,
    text="Seed Density: ---",
    font=("Arial", 10),
    bg="#fff0f2",
    fg="#555555"
)
density_label.pack()


message_label = tk.Label(
    result_card,
    text="Your watermelon awaits 🍉",
    font=("Arial", 11, "italic"),
    bg="#fff0f2",
    fg="#333333"
)
message_label.pack(pady=5)


# -----------------------------
# Uselessness Score
# -----------------------------
useless_label = tk.Label(
    window,
    text="Uselessness Score: ---",
    font=("Arial", 12, "bold"),
    bg="#fff4f7",
    fg="#9b2c2c"
)
useless_label.pack(pady=15)


# -----------------------------
# Footer
# -----------------------------
footer = tk.Label(
    window,
    text="WSES © 2026 | Solving problems nobody asked us to solve 🍉",
    font=("Arial", 9),
    bg="#fff4f7",
    fg="#888888"
)
footer.pack(side="bottom", pady=10)


# Start application
window.mainloop()