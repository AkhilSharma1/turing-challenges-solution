import 'package:flutter/material.dart';

class NavDrawer extends StatelessWidget {
  final String title;

  NavDrawer({Key key, this.title}) : super(key: key);

  final NavDrawerButtonTheme = Theme(
    data: ThemeData(buttonTheme: ButtonThemeData()),
    child: Text('data'),
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('title')),
      body: Center(child: Text('My Page!')),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: Container(
          // color: Colors.black87,
          child: Column(
            // Important: Remove any padding from the ListView.
            children: <Widget>[
              Expanded(
                flex: 4,
                child: Container(
                  color: Colors.green,
                  child: Container(
                    color: Colors.yellow,
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: <Widget>[
                        Expanded(
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                child: RaisedButton(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(Icons.shopping_basket),
                                      Text('Shop'),
                                    ],
                                  ),
                                  onPressed: () {},
                                ),
                              ),
                              Expanded(
                                child: RaisedButton(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(Icons.shopping_basket),
                                      Text('Shop'),
                                    ],
                                  ),
                                  onPressed: () {},
                                ),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                child: RaisedButton(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(Icons.shopping_basket),
                                      Text('Shop'),
                                    ],
                                  ),
                                  onPressed: () {},
                                ),
                              ),
                              Expanded(
                                child: RaisedButton(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(Icons.shopping_basket),
                                      Text('Shop'),
                                    ],
                                  ),
                                  onPressed: () {},
                                ),
                              ),
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 6,
                child: Container(
                  color: Colors.red,
                  child: Column(
                    children: <Widget>[
                      ListTile(
                        title: Center(child: Text('Item 1')),
                        onTap: () {
                          // Update the state of the app
                          // ...
                          // Then close the drawer
                          Navigator.pop(context);
                        },
                      ),
                      ListTile(
                        title: Center(child: Text('Item 2')),
                        onTap: () {
                          // Update the state of the app
                          // ...
                          // Then close the drawer
                          Navigator.pop(context);
                        },
                      ),
                      ListTile(
                        title: Center(child: Text('Item 2')),
                        // Update the state of the app
                        onTap: () {
                          // ...
                          // Then close the drawer
                          Navigator.pop(context);
                        },
                      ),
                      Expanded(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Container(
                              child: Text('FOLLOW US'),
                              margin: EdgeInsets.only(bottom: 24.0),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                              children: <Widget>[
                                Text('FB'),
                                Text('TW'),
                                Text('PI'),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
