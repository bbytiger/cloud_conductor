import datetime

import click
import tabulate

import typelayer
import serializer

class CliManager:
    def __init__(self, path):
        self.path = path
        self.pipelines = self.load()

    def append_pipeline(self, pipeline: typelayer.Pipeline):
        self.pipelines.append(pipeline.transform())

    def remove_pipeline(self, pipeline: typelayer.Pipeline):
        pass

    def sync(self):
        # write to pipeline config file
        pass

    def load(self):
        # load from config file
        pass

@click.group()
@click.option('--config_path', default="./cache/config")
@click.option('--verbose/--quiet', default=False)
@click.pass_context
def cli(ctx, config_path, debug):
    if debug:
        click.echo('Debug mode is on')
        click.echo('Config path set to {}'.format(config_path))
    ctx.ensure_object(dict)
    ctx.object['DEBUG'] = debug
    ctx.object['MANAGER'] = CliManager(config_path)

@cli.command()
@click.pass_context
def list_pipelines(ctx):
    click.echo(
        tabulate.tabulate(
            ctx.object['MANAGER'].pipelines, 
            headers=["NAME", "STAGE COUNT", "CREATED AT", "ID"]
        )
    )

@cli.command()
@click.option('--name', required=True)
@click.option('--stagecount', default=1)
@click.pass_context
def create_pipeline(ctx, name, stagecount):

    def create_stage():
        # TODO: running some optimizations to give user suggestions
        stage_type = click.prompt(
            "Choose stage type: (PREPROCESSING / TRAINING / DATA_TRANSFER)"
        )
        machine_type = click.prompt(
            'Enter your preferred machine type: ', default="a1.medium"
        )
        script_path = click.prompt("Enter script path: ")
        source_data = click.prompt("Enter source data path: ")
        location_constraint = click.prompt("Enter location constraint: (RETURN if none) ")
        provider = click.prompt("Enter provider preference: (AWS/GCP, RETURN if none) ")
        return typelayer.Stage()

    initial_location = click.prompt("Enter an initial location: ")
    pipeline = typelayer.Pipeline(stagecount, name, initial_location, datetime.datetime.now())
    for _ in range(stagecount):
        pipeline.add_stage(create_stage())
    ctx.object['MANAGER'].append_pipeline(pipeline)
    ctx.object['MANAGER'].sync()

@cli.command()
def update_pipeline():
    pass



if __name__ == "__main__":
    cli()