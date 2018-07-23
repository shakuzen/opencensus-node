/**
 * Copyright 2018, OpenCensus Authors
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

import {Measurement, Tags} from '../types';

import {AggregationType, LastValueData} from './types';

export class LastValueAggregation implements LastValueData {
  /** The aggregation type of the aggregation data */
  readonly type: AggregationType;
  /** The tags/labels that this AggregationData collects and aggregates */
  readonly tags: Tags;
  /** The latest timestamp a new data point was recorded */
  timestamp: number;
  /** The last recorded value */
  value: number;

  constructor() {}

  addMeasurement(measurement: Measurement): void {
    // TODO: To be implemented
  }
}