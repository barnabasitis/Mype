from flask import *
from flask.blueprints import Blueprint
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///subscribers.db'
db.init_app(app)

app.secret_key = 'you_must_be_crazy'


class Subscribers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email_address = db.Column(db.String)


with app.app_context():
    db.create_all()


admin = Blueprint(
    'admin',
    __name__,
    url_prefix='/ad_min_portal',
    template_folder='templates/admin'
)


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        if request.form['email']:
            db.session.add(
                Subscribers(
                    email_address=request.form['email']
                )
            )
            db.session.commit()
    return render_template('index.html')


@admin.route('/', methods=['POST', 'GET'])
def admin_login():
    if 'username' in session:
        subs = Subscribers.query.all()
        return render_template('admin/admin_profile.html', subs=subs)
    if request.method == 'POST':
        if request.form['username'] == 'admin':
            if request.form['password'] == 'admin':
                session['username'] = request.form['username']
            else:
                flash(message='Wrong Password', category='Error')
        else:
            flash(message='Wrong Username')
        return redirect(url_for('admin.profile'))
    return render_template('admin/admin_login.html')


@admin.route('/profile')
def profile():
    subs = Subscribers.query.all()
    return redirect(url_for('admin.admin_login'))


@admin.route('/logout')
def logout():
    session.pop('username')
    return redirect(url_for('admin.admin_login'))


app.register_blueprint(admin)
app.run()
