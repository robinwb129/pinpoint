/*
 *  Copyright 2016 NAVER Corp.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package com.navercorp.pinpoint.web.applicationmap;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.navercorp.pinpoint.web.vo.scatter.ApplicationScatterScanResult;

import java.util.Collection;
import java.util.List;

/**
 * @Author Taejin Koo
 */
public class ApplicationMapWithScatterScanResult implements ApplicationMap {

    private final ApplicationMap applicationMap;
    private final List<ApplicationScatterScanResult> applicationScatterScanResultList;

    public ApplicationMapWithScatterScanResult(ApplicationMap applicationMap, List<ApplicationScatterScanResult> applicationScatterScanResultList) {
        this.applicationMap = applicationMap;
        this.applicationScatterScanResultList = applicationScatterScanResultList;
    }

    @Override
    public Collection<Node> getNodes() {
        return applicationMap.getNodes();
    }

    @Override
    public Collection<Link> getLinks() {
        return applicationMap.getLinks();
    }

    @JsonIgnore
    public List<ApplicationScatterScanResult> getApplicationScatterScanResultList() {
        return applicationScatterScanResultList;
    }

}
