var seleniumServer = require('selenium-server');
const chromedriver = require("chromedriver");

module.exports = {
	"src_folders": ["tests"],
	"output_folder": "reports",
	"custom_commands_path": "./commands",
	"custom_assertions_path": "",
	"page_objects_path": "",
	"globals_path": "",

	"selenium": {
		"start_process": true,
		"server_path": seleniumServer.path,
		"host": "127.0.0.1",
		"port": 4444,
		"skip_testcases_on_fail": false,
		"cli_args": {
			'webdriver.chrome.driver' : chromedriver.path
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "http://localhost:8888/login",
			"selenium_host": "localhost",
			"selenium_port": 4444,
			"pathname": "/wd/hub",
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome",
				"chromeOptions" : {
					"w3c":false,
					"args" : [ ] // pass custom CLI args to Chrome
				  }
			}
		},

		"ci": {
			"desiredCapabilities": {
				"browserName": "firefox"
			}
		}		
	}
}
