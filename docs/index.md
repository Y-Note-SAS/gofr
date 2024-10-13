<img src="img/GOFR_RGB_high-res.png" width="400">

# Introduction

The Global Open Facility Registry (GOFR) lets health data administrators analyze, de-duplicate, and curate lists of facilities. It’s helped health officials develop registries of all unique health facilities in a country by reconciling data sets maintained by multiple sources.

Basic data such as name, location, and other attributes of health facilities are key to understanding health care delivery and facilitating a functioning health information system. However, many government organizations have multiple facility lists
in various parts of the health system with conflicting or incomplete information. GOFR helps to reduce data redundancy, improve access to data, and allow anyone to align facility information across multiple software systems.

!!! important "Welcome!"
    These are the docs for the next iteration of GOFR, which is based on the original codebase of the [Facility Reconciliation Tool](https://github.com/openhie/facility-recon).

!!! Important
    The [design document](https://docs.google.com/document/d/1LGzwyxDzH6BmnVn94-V2waCmr0igIhZxxTHD-wnBX50) outlines the next steps in the creation of GOFR based on community feedback. If you have ZenHub installed, you may view the [2021 roadmap](https://github.com/intrahealth/gofr/blob/master/LICENSE#workspaces/gofr-60495960906eba0017c751ea/roadmap?repos=346409080).

## Features

GOFR is a GUI on top of the popular and open source HAPI FHIR Server that makes it easier to manage lists of facilities, their hierarchies, services, and attributes. It supports:

* CSV, DHIS2, and FHIR servers as data sources.
* Nested lists, ie. facilities that are administrative hierarchies like state->county->hospital.
* An API and backend engine that use [FHIR](https://www.hl7.org/fhir/location.html) resources based on the [mCSD](http://wiki.ihe.net/index.php/Mobile_Care_Services_Discovery_(mCSD)) profile.
* Modular system to extend algorithms for matching.

Many new features in addition to the above are planned for completion in 2022.

## Contributing and community

* For immediate support, join the [#gofr](https://ihris.slack.com/archives/C01P3BX8FA7) channel on the iHRIS Slack team.
* For open monthly discussions, join the [OpenHIE Facility Registry Community](https://wiki.ohie.org/display/SUB/Facility+Registry+Community).
* Search through or create an [issue](https://github.com/intrahealth/gofr/issues).

## License

GOFR is distributed under the Apache 2.0 license.

