from flask import Flask, render_template, jsonify

app = Flask(__name__)
app.secret_key = "dcrp-secret-key-change-this"

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
    return jsonify({
        "online": True,
        "players": 32,
        "max_players": 64
    })

if __name__ == '__main__':
    app.run(debug=True)
