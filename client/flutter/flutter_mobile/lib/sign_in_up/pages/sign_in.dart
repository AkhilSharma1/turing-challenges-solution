import 'package:flutter/material.dart';

class SignInPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Storex')),
      body: SignInForm(),
    );
  }
}

class SignInForm extends StatefulWidget {
  @override
  _SignInFormState createState() => _SignInFormState();
}

class _SignInFormState extends State<SignInForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(hintText: 'Email'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextField(
                decoration: InputDecoration(hintText: 'Password'),
              ),
            ),
            SizedBox(
              height: 52.0,
              child: RaisedButton(
                child: Text('SIGN IN'),
                onPressed: () {},
              ),
            ),
            FlatButton(
              child: Text('Forgot password?'),
              onPressed: () {},
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Center(child: Text('OR, SIGN IN USING SOCIAL NETWORKS')),
                  Row(
                    children: <Widget>[
                      Text('FB'),
                      Text('GO'),
                      Text('TW'),
                    ],
                  ),
                  SizedBox(
                    height: 52.0,
                    child: RaisedButton(
                      child: Text('SEND'),
                      onPressed: () {},
                    ),
                  ),
                  RaisedButton(
                    child: Text('Not a member? SIGN UP'),
                    onPressed: () {},
                  ),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
