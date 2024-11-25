from flask import Flask, render_template, jsonify
from flask_discord import DiscordOAuth2Session
import os

app = Flask(__name__)
app.secret_key = "dcrp-secret-key-change-this"

# Discord OAuth2 Config
app.config["DISCORD_CLIENT_ID"] = "YOUR_DISCORD_CLIENT_ID"
app.config["DISCORD_CLIENT_SECRET"] = "YOUR_DISCORD_CLIENT_SECRET"
app.config["DISCORD_REDIRECT_URI"] = "http://localhost:5000/callback"
discord = DiscordOAuth2Session(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/rules')
def rules():
    return render_template('rules.html')

@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

@app.route('/keybinds')
def keybinds():
    return render_template('keybinds.html')

@app.route('/partner')
def partner():
    return render_template('partner.html')

@app.route('/api/server-status')
def server_status():
    # Hier später die echte Server-Status-Logik implementieren
    return jsonify({
        "online": True,
        "players": 15,
        "max_players": 64
    })

if __name__ == '__main__':
    app.run(debug=True)
