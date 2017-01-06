/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



"use strict";


function BaseClient()
{
    if (!(this instanceof BaseService)) {
        // it might be better to just create a new instance and return that.. but that can't be done here, it has to be done in each individual service. So this is still a good failsafe even in that case.
        throw new Error('"new" keyword required to create Watson service instances');
    }
    var options = extend({}, user_options);

    options = this.initCredentials(options);

    if (options.url)
        options.url = helper.stripTrailingSlash(options.url);

    this._options = extend({qs: {}, url: this.constructor.URL}, this.serviceDefaults, options);
}


module.exports = BaseClient;
